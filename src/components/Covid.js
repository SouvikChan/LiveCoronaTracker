import React,{useEffect,useState} from 'react'
import './Covid.css';

const Covid = () => {

    const [data, setData] = useState([]);

        const getCovidData = async () =>{

            try{ 
            const res = await fetch('https://data.covid19india.org/data.json');
            const actualData =  await res.json();
            console.log(actualData.statewise[0]);
            setData(actualData.statewise[0]);
            }
            catch(err)
            {
                console.log(err);
            }
        }

   

    useEffect(() => {
        getCovidData();
    }, []);


    return (
        <>
        <section>
            <h1>🔴 LIVE</h1>
            <h2>COVID-19 CORONAVIRUS TRACKER</h2>


            <ul>
                <li className="card">
                    <div className="card__main">
                        <div className="card__inner">
                            <div className="box__1">
                            <p className="card__name"><span className="small">OUR</span> COUNTRY</p>
                            <p className="card__total  card__small">INDIA</p>
                            </div>
                        </div>
                    </div>

                    <div className="card__main box__2">
                        <div className="card__inner">
                            
                            <p className="card__name"><span className="small">TOTAL</span> RECOVERED</p>
                            <p className="card__total  card__small">{data.recovered}</p>
                            
                        </div>
                    </div>

                    <div className="card__main box__3">
                        <div className="card__inner">
                            <div className="">
                            <p className="card__name"><span className="small">TOTAL</span> CONFIRMED</p>
                            <p className="card__total  card__small">{data.confirmed}</p>
                            </div>
                        </div>
                    </div>

                    <div className="card__main box__4">
                        <div className="card__inner">
                            <div className="">
                            <p className="card__name"><span className="small">TOTAL</span> DEATH</p>
                            <p className="card__total  card__small">{data.deaths}</p>
                            </div>
                        </div>
                    </div>

                    <div className="card__main box__5">
                        <div className="card__inner">
                            <div className="">
                            <p className="card__name"><span className="small">TOTAL</span> ACTIVE</p>
                            <p className="card__total  card__small">{data.active}</p>
                            </div>
                        </div>
                    </div>

                    <div className="card__main box__6">
                        <div className="card__inner">
                            <div className="">
                            <p className="card__name"><span className="small">LAST</span> UPDATED</p>
                            <p className="card__total  card__small">{data.lastupdatedtime}</p>
                            </div>
                        </div>
                    </div>
                </li>
                
            </ul>
        </section>
        </>
    )
}

export default Covid