

const SectionHeader = ({title, subTitle, color}) => {
    return (
        <div className={`mt-14 mb-8 mx-auto w-fit text-center space-y-4`}>
            <h1 className={`text-4xl text-${color} border-b-2 border-${color} pb-2`}>{title}</h1>
            <p className="text-xl text-gray-800">{subTitle}</p>
            
        </div>
    );
};

export default SectionHeader;