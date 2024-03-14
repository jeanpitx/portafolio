import { Avatar, AvatarGroup, Card, CardBody, CardFooter, Divider, Image, Link, Tooltip, useDisclosure } from "@nextui-org/react"
import { ESPANOL, ProyectoInterface } from "../assets/content"
import { Titulo } from "../components/Titulo"
import { ModalProyecto } from "../components/ModalProyecto";
import { useState } from "react";

const colores = ["#b34c4c", "#748574", "#b99833"];

export const Proyectos = () => {

  const { onOpenChange, isOpen } = useDisclosure();
  const [proyectoActual, setProyectoActual] = useState<ProyectoInterface>();

  const truncarDescripcion = (cadena: string) => {
    if (cadena.length >= 100) {
      return cadena.substring(0, 99) + "...";
    }
    return cadena;
  }

  return (
    <div id="proyectos" className="w-full min-h-[100vh] bg-secondary p-4 md:p-12">
      <Titulo>{ESPANOL.proyectos.titulo}</Titulo>
      <div className="lg:w-[50%] m-auto">
        <p className="text-center text-textSecondary font-Poppins font-[600]  md:text-xl">
          {ESPANOL.proyectos.descripcion}</p>
      </div>

      <div className="m-auto mt-12 w-full xl:w-4/5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 3xl:grid-cols-4 gap-6">
        {ESPANOL.proyectos.proyectos.map((item, i) => (
          <Card shadow="sm" key={i}
            className="hover:scale-105 text-textPrimary bg-primary font-Poppins"
            isPressable
            onPress={() => { setProyectoActual(item); onOpenChange() }}>
            <CardBody className="overflow-visible p-4">
              <Image
                shadow="sm"
                width="100%"
                radius="sm"
                alt={item.titulo}
                className="w-full object-cover h-[220px]"
                src={item.imagenes.find(i => i.portada == true)?.src}
              />
              <div>
                <h4 className="font-bold text-xl pt-2 font-[600]">{item.titulo}</h4>
                <p className="my-2 text-textSecondary text-base font-[400]">{truncarDescripcion(item.descripcion)}</p>

                {
                  item.stack.map((t, i) =>
                    <span key={t + i}
                      className="font-medium text-sm italic"
                      style={{ color: colores[i % colores.length] }}>{`#${t} `}</span>)
                }
              </div>

              <div className="mt-4 h-12 flex">
                <AvatarGroup isBordered>
                  {item.colaboradores.map(colab => (
                    <Tooltip key={colab.nombre} color="secondary" content={colab.nombre} className="capitalize">
                      <Avatar src={colab.img} />
                    </Tooltip>
                  ))}
                </AvatarGroup>
              </div>


            </CardBody>
            <Divider />
            <CardFooter>
              {
                (item.enlaces.length > 0) &&
                <Link
                  isExternal
                  showAnchorIcon
                  href={item.enlaces[0].url}
                  className="text-textSecondary italic"  
                >
                  {item.enlaces[0].titulo}.
                </Link>
              }
            </CardFooter>
          </Card>
        ))}
      </div>

      <ModalProyecto isOpen={isOpen} onOpenChange={onOpenChange} data={proyectoActual} />
    </div>
  )
}
