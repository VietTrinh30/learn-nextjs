import Link from 'next/Link';
function navigator({ title, iconPath, page }: { title: string; iconPath: string; page: string }) {
  return (
    <Link href={page}>
      <div className="content-center p-2 bg-blackBorder rounded-md flex">
        <div className="p-1 bg-black rounded-sm">
          <object type="image/svg+xml" data={iconPath} width="16" />
        </div>
        <p className="inline mx-2 self-center">{title}</p>
      </div>
    </Link>
  );
}
export default navigator;
