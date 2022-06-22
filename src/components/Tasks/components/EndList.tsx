interface EndListProps {
  message: string;
  imgSticker: string;
}

export function EndList({ message, imgSticker }:EndListProps){
  return(
    <div className="w-full h-full relative flex items-center justify-center">
      <img className="h-32 -mb-6 src={imgStickers[sticker]}" src={imgSticker} alt="Imagem ilustrativa de um boneco" />
      <h4 className="font-bold mb-10 -ml-4"> {message} </h4>
    </div>
  )
}