interface Props {
    children: any;
    align?: "CENTER"|"LEFT"|"RIGTH"
    className?: string;
    useTheme?: boolean;
}

export const Titulo = ( {children, className = "", align = "CENTER", useTheme = true} : Props) => {
  
  return (
    <h1 className={`font-Poppins font-[800] text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl m-8 ${className}
    ${ (align == "CENTER") ? "text-center": (align == "RIGTH") ? "text-right" : "text-left"}
    ${ useTheme ? "text-textPrimary" : ""}`}>
        {children}
    </h1>
  )
}
