const Collaborators = () => {
    return (
        <div className="bg-cover bg-center bg-no-repeat h-[70vh] overflow-hidden bg-fixed bg-[url('../../public/images/rent-out.avif')] flex flex-col items-center justify-center pt-20 text-white text-center px-4 mb-16 relative z-10">
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/30 -z-10"></div>
            <div className="text-container w-11/12 mx-auto mb-10 text-center">
                <h3 className="text-4xl font-semibold mb-10">
                    Our Trusted 
                    <span className="text-yellow-400"> Clients & Partners
                    </span>
                </h3>
                <div className='w-9/11  mx-auto grid grid-cols-2 md:grid-cols-4  items-center justify-around'>
                    <img  src="https://i.ibb.co.com/WW5LzV0T/images.jpg" alt="" className="h-20 object-contain mx-auto rounded-2xl" />
                    <img src="https://i.ibb.co.com/JWtkLn05/images-2.png" alt="" className="h-20 object-contain mx-auto rounded-2xl" />
                    <img src="https://i.ibb.co.com/6R9CmF88/6584598b2b787d52aff70593-Easy-Park.webp" alt="" className="h-20 object-contain mx-auto rounded-2xl" />
                    <img src="https://i.ibb.co.com/mVRNmBBn/images-1.jpg" alt="" className="h-20 object-contain mx-auto rounded-2xl" />
                </div>
            </div>
        </div>
    );
};

export default Collaborators;
