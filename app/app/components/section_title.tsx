export default function SectionTitle({children}: Readonly<{
  children: React.ReactNode;
}>) {
    return (
        <p className="text-9xl text-green mx-8 mb-32">
            {children}
        </p>
    );
}