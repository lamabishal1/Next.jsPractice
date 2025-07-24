import Image from "next/image";
import wondersImages from "@/app/photo-feed/wonders";
import Modal from "@/app/components/Modal";
import React from 'react';

export default function PhotoModal({params}){
  const { id } = params || {};
  if (!id) {
    return <div>Invalid parameters</div>;
  }
  
  const photo = wondersImages.find((p) => p.id === id);

  return (
    <Modal>
      <Image
        alt={photo.name}
        src={photo.src}
        className="w-full object-cover aspect-square"
      />

      <div className="bg-white p-4">
        <h2 className="text-xl font-semibold">{photo.name}</h2>
        <h3>{photo.photographer}</h3>
        <h3>{photo.location}</h3>
      </div>
    </Modal>
  );
}