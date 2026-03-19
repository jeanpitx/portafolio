import { Avatar, AvatarGroup, Button, Chip, Divider, Link, Modal, ModalBody, ModalContent, ModalFooter, Tooltip } from '@nextui-org/react'
import { ProyectoInterface } from '../assets/content';
import { ImageSlider } from './ImageSlider';


interface Props {
    isOpen: boolean;
    onOpenChange: () => void;
    data: ProyectoInterface | undefined;
}


export const ModalProyecto = ({ isOpen = false, onOpenChange, data }: Props) => {
    return (
        <Modal
            isOpen={isOpen}
            onOpenChange={onOpenChange}
            scrollBehavior={"inside"}
            backdrop='blur'
            size='3xl' className='bg-primary text-textPrimary'>
            <ModalContent>
                {(onClose) => (
                    <>
                        <ModalBody className='py-6 w-full font-Poppins'>
                            <div>
                                <ImageSlider arrImagenes={data != undefined ? data.imagenes.filter(item => !item.portada) : []} />
                            </div>
                            <h2 className='font-bold text-xl font-[600]'>{data?.titulo}</h2>
                            <p className='text-sm font-[400]'>{data?.descripcion}</p>
                            <div className='flex flex-wrap w-full'>
                                {data?.stack.map(t => (
                                    <Chip
                                        key={t}
                                        variant="shadow"
                                        classNames={{
                                            base: `bg-gradient-to-br from-indigo-500 to-pink-500 border-small 
                                            border-white/50 shadow-pink-500/30 m-1 cursor-pointer hover:skew-y-3`,
                                            content: "drop-shadow shadow-black text-white text-xs italic",
                                        }}
                                    >
                                        {t}
                                    </Chip>
                                ))}
                            </div>
                            <Divider />
                            <div className='flex mx-10 mb-4 md:mb-0'>
                                <AvatarGroup isBordered>
                                    {data?.colaboradores.map(colab => (
                                        <Tooltip key={colab.nombre} color="secondary" content={colab.nombre} className="capitalize">
                                            <Avatar src={colab.img} />
                                        </Tooltip>
                                    ))}
                                </AvatarGroup>
                            </div>

                        </ModalBody>
                        <ModalFooter>
                            <div className='flex justify-between gap-2'>
                                {
                                    data?.enlaces.map(enlace => (
                                        <Button key={enlace.titulo}
                                            href="https://github.com/nextui-org/nextui"
                                            as={Link}
                                            showAnchorIcon
                                            variant="solid"
                                        >
                                            {enlace.titulo}
                                        </Button>
                                    ))
                                }
                                <Button color="danger" variant="flat" className='font-medium' onPress={onClose}>
                                    Cerrar
                                </Button>
                            </div>

                        </ModalFooter>
                    </>
                )}
            </ModalContent>
        </Modal>
    )
}
