import { Link } from "@inertiajs/react"

export default function CardPortfolio ({className, thumbnail, title, description}){
    return(
        <div className={`bg-slate-900 mr-3 ml-3 my-2 mobile:h-96 mobile:w-full mobile:my-3 mobile:mx-auto` + className }>
        <Link>
        <img src={thumbnail} alt="Gambar" className="w-72 mb-4 m-auto mt-10 mobile:h-56 mobile:w-72 mobile:mx-auto " />
        </Link>
        <h3 className="text-3xl mb-2 text-white font-light text-center">
            {title}
        </h3>
        <p className="text-white font-light text-center">
            {description}
        </p>
      </div>
    )
}