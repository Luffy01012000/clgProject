import React from 'react'
// import { IonIcon } from '@ionic/react';
// import { logoIonic } from 'ionicons/icons';

const Map = () => {
  return (
    <>
        <div className="flex justify-center ">
    <div className="flex md:flex-row flex-col justify-center max-w-7xl m-4 ">
       
        <div className="w-3/4 lg:w-2/3 ">
            <map className="w-3/4 lg:w-1/2 overflow-contain h-min"> <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.315540303!2d-74.26054823358196!3d40.697147766721685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1656264173526!5m2!1sen!2sin"
                    width="375" height="667"  
                    // style="border:0" 
                    // allowfullscreen="" 
                    loading="lazy"
                    // referrerpolicy="no-referrer-when-downgrade"
                    >
                        </iframe> </map>
        </div>
    </div>
    </div>
    </>
  )
}

export default Map