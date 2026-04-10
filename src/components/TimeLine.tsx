import { Tilt } from 'react-tilt';
import { useContext } from 'react';
import { themeContext, useLang } from '../context';
import { calcularDiferenciaFechas } from '../utils/helpers';

export const TimeLine = () => {
    const { isDark } = useContext(themeContext);
    const { content } = useLang();

    return (
        <div className="wrapper">
            <div className={`center-line ${isDark ? "bg-white" : "bg-black"} `}></div>
            {
                content.expericia.timeLine.map((exp, i) => (
                    <div
                        key={exp.titulo + i} id={exp.titulo + i} className={`row ${(i % 2 == 0) ? "row-2" : "row-1"}`}>
                        <section>
                            <div className={`icon fas fa-home text-textPrimary ${isDark ? "bg-gradient-to-r from-pink-500 to-violet-500" : "bg-gradient-to-r from-pink-500 to-violet-500"}`}>
                                <div>
                                    {(i % 2 == 0) ?
                                        <div className='flex flex-col gap-0 text-right' style={{ position: "absolute", left: "-230px", width: "200px" }}>
                                            <span className='bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 font-[800] text-sm leading-tight'>{exp.tiempo}</span>
                                            <span className='-mt-1 text-sm'>{calcularDiferenciaFechas(exp.tiempo)}</span>
                                        </div>
                                        :
                                        <div className='flex flex-col gap-0 text-left' style={{ position: "absolute", right: "-230px", width: "200px" }}>
                                            <span className='bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 font-Poppins font-[800] text-sm leading-tight'>{exp.tiempo}</span>
                                            <span className='-mt-1 text-sm'>{calcularDiferenciaFechas(exp.tiempo)}</span>
                                        </div>
                                    }
                                </div>
                            </div>
                            <Tilt className='cursor-pointer bg-white p-4 border-2 rounded-xl drop-shadow-xl'>
                                <div>
                                    <h3 className="font-bold text-2xl text-[#000] font-[800]">{exp.titulo}</h3>
                                    <span className='block font-bold text-lg font-[600]'>{exp.empresa}</span>
                                </div>
                                <ul>
                                    {
                                        exp.tareas.map((tarea: string, j: number) => (
                                            <li key={j} className='font-Poppins font-[400]'><span>•</span>{tarea}</li>
                                        ))
                                    }
                                </ul>
                            </Tilt>
                        </section>
                    </div>
                ))
            }
        </div>
    )
}
