export default function RootLayout3({
  children,
}: {
  children: React.ReactNode;
}) {
 
  return (
    <>
      <header className="">        
        {children}
        </header>
      
    </>
  );
}
