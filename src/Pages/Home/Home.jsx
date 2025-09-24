
import React from "react";
import "./Home.css";
import { CLIENTS, HERO_CONTENT, CLIENTS_SECTION } from "../../data/constants";
import ClientCard from "../../components/ClientCard/ClientCard";
import Hero from "../../components/Hero/Hero";

const Home = React.memo(() => {
    return (
        <>
            <div className="home-hero">
                {/* <Hero {...HERO_CONTENT.home} /> */}
                <Hero {...HERO_CONTENT.home} page="home" />

            </div>
            
            <div className="landing__clients">
                <div className="clients__heading">{CLIENTS_SECTION.heading}</div>
                <div className="clients__list">
                    {CLIENTS.map(client => (
                        <ClientCard key={client.id} logo={client.logo} name={client.name} />
                    ))}
                </div>
            </div>
        </>
    );
});

export default Home;



