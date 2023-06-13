import type { User, Photo, PhotoCategory } from "@prisma/client";

import { prisma } from "~/db.server";

export type { Photo } from "@prisma/client";

export function getPhoto({id}: Pick<Photo, "id">) {
  return prisma.photo.findFirst({
    select: { id: true, title: true, img: true },
    where: { id },
  });
}

export function getPhotoListItems({ categoryId }: { categoryId: PhotoCategory["id"] }) {
  return prisma.photo.findMany({
    where: { categoryId },
    select: { id: true, title: true, img: true },
  });
}

export function createPhoto({
  title,
  img,
  categoryId,
}: Pick<Photo, "title" | "img"> & {
  categoryId: PhotoCategory["id"];
}) {
  return prisma.photo.create({
    data: {
      title,
      img,
      categoryId: categoryId,
    },
  });
}

export function deletePhoto({id}: Pick<Photo, "id">) {
  return prisma.photo.deleteMany({
    where: { id },
  });
}
