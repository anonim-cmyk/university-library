import config from "@/lib/config";
import {
  IKImage,
  ImageKitProvider,
  ImageKitContext,
  IKUpload,
} from "imagekitio-next";
import { useRef, useState } from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import { toast } from "@/hooks/use-toast";

const {
  env: {
    imageKit: { publicKey, urlEndpoint },
  },
} = config;

const autenthicator = async () => {
  try {
    const response = await fetch(`${config.env.apiEndpoint}/api/auth/imagekit`);
    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(
        `Request failed with status ${response.status}:${errorText}`
      );
    }
    const data = await response.json();
    const { signature, expire, token } = data;

    return { token, expire, signature };
  } catch (error: any) {
    throw new Error(`Authentication request failed:${error.message}`);
  }
};

function ImageUpload({
  onFileChange,
}: {
  onFileChange: (filePath: string) => void;
}) {
  const ikUploadRef = useRef(null);
  const [file, setFile] = useState<{ filePath: string } | null>(null);

  const onError = (error: any) => {
    console.log(error);

    toast({
      title: "Uplaod Filed",
      description: `Your image could not be uploaded. Please Try Again`,
      variant: "destructive",
    });
  };
  const onSuccess = (res: any) => {
    setFile(res);
    onFileChange(res.filePath);
    toast({
      title: "Uplaod File Successfully",
      description: `${res.filePath} uploaded SuccessFully!`,
    });
  };
  return (
    <ImageKitProvider
      publicKey={publicKey}
      urlEndpoint={urlEndpoint}
      authenticator={autenthicator}
    >
      <IKUpload
        className="hidden"
        ref={ikUploadRef}
        onError={onError}
        onSuccess={onSuccess}
        fileName="test-upload.png"
      />
      <Button
        className="upload-btn"
        onClick={(e) => {
          e.preventDefault();
          if (ikUploadRef.current) {
            // @ts-ignore
            ikUploadRef.current?.click();
          }
        }}
      >
        <Image
          src="/icons/upload.svg"
          alt="upload"
          height={20}
          width={20}
          className="object-contain"
        />
        <p className="text-base text-light-100">Upload a File</p>
        {file && <p className="upload-filename">{file.filePath}</p>}
      </Button>
      {file && (
        <IKImage
          height={500}
          width={300}
          alt={file.filePath}
          path={file.filePath}
        />
      )}
    </ImageKitProvider>
  );
}

export default ImageUpload;
