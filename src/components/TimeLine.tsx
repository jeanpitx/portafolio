import { Tilt } from 'react-tilt';
import { ESPANOL } from '../assets/content';
import { useContext } from 'react';
import { themeContext } from '../context';

export const TimeLine = () => {

    const { isDark } = useContext(themeContext);

    return (
        <div className="wrapper">
            <div className={`center-line ${isDark ? "bg-white" : "bg-black"} `}></div>
            {
                ESPANOL.expericia.timeLine.map((exp, i) => (
                    <div
                        key={exp.titulo + i} id={exp.titulo + i} className={`row ${(i % 2 == 0) ? "row-2" : "row-1"}`}>
                        <section> 
                            <div className={`icon fas fa-home text-textPrimary ${isDark ? "bg-gradient-to-r from-pink-500 to-violet-500" : "bg-gradient-to-r from-pink-500 to-violet-500"}`}>
                                <div>
                                    {(i % 2 == 0) ?
                                        <span className='bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500  font-[800]' style={{ position: "absolute", left: "-250px" }}>{exp.tiempo}</span>
                                        :
                                        <span className='bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 font-Poppins font-[800]' style={{ position: "absolute", right: "-250px" }}>{exp.tiempo}</span>
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
                                        exp.tareas.map((tarea, j) => (
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