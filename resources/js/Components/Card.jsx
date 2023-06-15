export default function Card ({className, thumbnail, title, description}){
    return(
        <div class="bg-grey mr-3 ml-3 mobile:h-96 mt-2">
        <img src={thumbnail} alt="Gambar" class="w-full mb-4 mobile:h-72 mobile:w-72 mobile:mx-auto" />
        <h3 class="text-xl font-bold mb-2 text-white">
            {title}
        </h3>
        <p class="text-white">
            {description}
        </p>
      </div>
    )
}