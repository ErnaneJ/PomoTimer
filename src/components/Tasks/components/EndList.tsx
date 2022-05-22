import bento_cool from "../../../assets/images/bento_cool.png";
import bento_judging from "../../../assets/images/bento_judging.png";
import bento_sad from "../../../assets/images/bento_sad.png";

interface EndListProps {
  message: string;
  sticker: number;
}

export function EndList({ message, sticker }:EndListProps){
  const imgStickers:string[] = [bento_cool, bento_judging, bento_sad];
  
  return(
    <div className="w-full h-full relative flex items-center justify-center">
      <img 
      className="h-32 -mb-6"
      src={imgStickers[sticker]} alt="Imagem de um bonequinho dando legal"/>
      <h4 className="font-bold mb-10 -ml-4">
        {message}
      </h4>
    </div>
  )
}