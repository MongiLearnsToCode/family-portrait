import { getCldImageUrl } from 'next-cloudinary';

export async function POST(req: Request) {
  const { publicId } = await req.json();

  const url = getCldImageUrl({
    src: publicId,
    width: 512,
    height: 512,
    crop: 'thumb',
    gravity: 'face',
  });

  return new Response(JSON.stringify({ url }), {
    headers: { "Content-Type": "application/json" },
  });
}
