// import HumBurger from '@/components/HumBurger';
import Navbar from '../../components/Navbar';


export default function RootLayout1({
  children,
}: {
  children: React.ReactNode;
}) {

 
  return (
    <>
      
      <header className="">
        <Navbar/>
        
        {children}
        </header>
        {/* <iframe className="relative" width="350" height="430"  src="https://console.dialogflow.com/api-client/demo/embedded/a15a4761-cb2c-4f90-9be3-06f95b8dcecd"></iframe> */}
        
    </>
  );
}
