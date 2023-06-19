export default function Card ({className, thumbnail, title, description}){
    return(
        <div className={`mr-3 ml-3 mobile:h-96 mobile:w-full mobile:my-8` + className }>
        <img src={thumbnail} alt="Gambar" className="w-full mb-4 justify-center mobile:h-56 mobile:w-72 mobile:mx-auto " />
        <h3 className="text-3xl mb-2 text-white font-light text-center">
            {title}
        </h3>
        <p className="text-white font-light text-center">
            {description}
        </p>
      </div>
    )
}