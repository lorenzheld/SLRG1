import React, {useState} from "react";
import Transportschwimmen from "./images/RtgrfE/Transportschwimmen.png"
import NKSGriff from "./images/RtgrfE/Nacken-Stirn-Griff.png"
import NGriff from "./images/RtgrfE/Nackengriff.png"

export default function Rettungsgriffe() {

    function Navbar(){
        const [activeTab, setActiveTab] = useState('Transportschwimmen');

        const handleTabClick = (tab) => {
            setActiveTab(tab);
        }

            return (
                <>
                    <div className="navbar">
                        <div
                            className={activeTab === 'Transportschwimmen' ? 'active-tab' : 'tab'}
                            onClick={() => handleTabClick('Transportschwimmen')}
                        >
                            Transportschwimmen
                        </div>
                        <div
                            className={activeTab === 'Nacken-Stirn-Griff' ? 'active-tab' : 'tab'}
                            onClick={() => handleTabClick('Nacken-Stirn-Griff')}
                        >
                            Nacken-Stirn-Griff
                        </div>
                        <div
                            className={activeTab === 'Nacken-Griff' ? 'active-tab' : 'tab'}
                            onClick={() => handleTabClick('Nacken-Griff')}
                        >
                            Nacken-Griff
                        </div>
                    </div>

                    {/* Hier wird der Inhalt des aktiven Tabs gerendert */}
                    <div className="tab-content">
                        {activeTab === 'Transportschwimmen' && (
                            <div>
                                <h3>Transportschwimmen</h3>
                                <p>
                                    Beim Transportschwimmen helfen wir Schwimmer:innen, das Ufer leichter zu erreichen,
                                    wenn diese erschöpft oder von Muskelkrämpfen befallen ist. Die hilfsbedürftige
                                    Person ist dabei noch ansprechbar und reagiert vernünftig.
                                </p>

                                <img src={Transportschwimmen} alt="Transportschwimmen" />

                            </div>
                        )}
                        {activeTab === 'Nacken-Stirn-Griff' && (
                            <div>
                                <h3>Nacken-Stirn-Griff</h3>
                                <p>Der Nacken-Stirn-Griff ist ein Griff zur Fixierung des Kopfes, wobei eine Hand an die
                                    Stirn der verunglückten Person gelegt wird, um den Kopf über Wasser zu halten, und
                                    die andere Hand den Nacken unterstützt.</p>
                                <p> Dieser Griff eignet sich für Personen, die wenig
                                    Gegenwehr leisten, und bietet eine effektive Methode, um den Kopf zu stabilisieren
                                    und sicher zu transportieren.
                                </p>
                                <img src={NKSGriff} alt="NackenstrirnGriff"/>
                            </div>
                        )}
                        {activeTab === 'Nacken-Griff' && (
                            <div>
                                <h3>Nacken-Griff</h3>
                                <p>Beim Nacken-Griff wird die verunglückte Person am Nacken gefasst und stabilisiert,
                                    sodass sie ruhig gehalten und sicher transportiert werden kann.</p>
                                <p>Ideal für die Rettung von Personen, die Panik zeigen oder
                                    sich aktiv bewegen, da der Griff mehr Kontrolle über den Körper der Person
                                    ermöglicht.
                                </p>
                                <img src={NGriff} alt="Nackengriff"/>
                            </div>
                        )}
                    </div>

                </>
            );
    }

    return (
        <>
            <h1>Rettungsgriffe</h1>
            <Navbar/>
        </>
    );
}

