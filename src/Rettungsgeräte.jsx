import React, { useState } from "react";
import Rescuebrett from "./images/RtgrT/rescue-brett.png";
import RescuebrettAnleitung from "./images/RtgrT/rescuebrett-anleitung.png";
import Rettungsboje from "./images/RtgrT/Rettungsboje.jpg";
import RettungsbojeAnleitung from "./images/RtgrT/Rettungsboje-Anleitung.jpg";
import Gurtretter from "./images/RtgrT/Gurtretter.jpg";
import GurtretterAnleitung from "./images/RtgrT/Gurtretter-Anleitung.jpg";
import GurtretterInAction from "./images/RtgrT/Gurtretter-in-Action.jpg";
import Rettungsfwuerfel from "./images/RtgrT/Rettungswürfel.png";
import RettungswuerfelBild from "./images/RtgrT/Rettungswürfel-Bild.jpg";
import Wurfsack from "./images/RtgrT/Wurfsack.png";
import WurfsackAnleitung from "./images/RtgrT/Wurfsack-Verwendung.jpg";
import Rettungsring from "./images/RtgrT/Rettungsring.png";
import RettungsringAnleitung from "./images/RtgrT/Rettungsring-verwendung.jpg";



export default function RettungsGerTe() {
    function Navbar() {
        const [activeTab, setActiveTab] = useState('Rettungsboje');

        const handleTabClick = (tab) => {
            setActiveTab(tab);
        };

        return (
            <>
                <div className="navbar">
                    <div
                        className={activeTab === 'Rettungsboje' ? 'active-tab' : 'tab'}
                        onClick={() => handleTabClick('Rettungsboje')}
                    >
                        Rettungsboje
                    </div>
                    <div
                        className={activeTab === 'Gurtretter' ? 'active-tab' : 'tab'}
                        onClick={() => handleTabClick('Gurtretter')}
                    >
                        Gurtretter
                    </div>
                    <div
                        className={activeTab === 'Rettungswürfel' ? 'active-tab' : 'tab'}
                        onClick={() => handleTabClick('Rettungswürfel')}
                    >
                        Rettungswürfel
                    </div>
                    <div
                        className={activeTab === 'Rescue-Brett' ? 'active-tab' : 'tab'}
                        onClick={() => handleTabClick('Rescue-Brett')}
                    >
                        Rescue-Brett
                    </div>
                    <div
                        className={activeTab === 'Wurfsack' ? 'active-tab' : 'tab'}
                        onClick={() => handleTabClick('Wurfsack')}
                    >
                        Wurfsack
                    </div>
                    <div
                        className={activeTab === 'Rettungsring' ? 'active-tab' : 'tab'}
                        onClick={() => handleTabClick('Rettungsring')}
                    >
                        Rettungsring
                    </div>
                </div>

                {/* Hier wird der Inhalt des aktiven Tabs gerendert */}
                <div className="tab-content">
                    {activeTab === 'Rettungsboje' && (
                        <div>
                            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-start', gap: '20px' }}>
                                <div style={{ flex: '1 1 50%' }}>
                                    <h2>Rettungsboje</h2>
                                    <p>
                                        Die Rettungsboje wird vor allem im See eingesetzt. Im Gegensatz zum Gurtretter besteht diese
                                        aus einer starren Boje mit seitlichen Haltegriffen und einem Seil und einer Schlaufe. Mit
                                        diesem Gerät kann man Personen abschleppen, die noch bei Bewusstsein sind, aber auch Bewusstlose.
                                    </p>
                                    <br />
                                    <br />
                                </div>
                                <div style={{ flex: '1 1 40%' }}>
                                    <img src={Rettungsboje} alt="Bild einer Rettungsboje" style={{ maxWidth: '100%', height: 'auto' }} />
                                </div>
                            </div>
                            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-start', gap: '20px', marginTop: '30px' }}>
                                <div style={{ flex: '1 1 50%' }}>
                                    <h3>Verwendung</h3>
                                    <p>
                                        Die Rettungsboje wird beim Hinschwimmen zu der verunfallten Person immer nachgezogen. Bei
                                        der verunfallten angekommen, hat die rettende Person grundsätzlich zwei Möglichkeiten:
                                        <br />
                                        - Sie reichen dem Rettling die Rettungsboje, worauf sich dieser am Gerät festhält, und in
                                        Sicherheit gebracht wird (für diese Methode muss die verunfallte Person bei vollem
                                        Bewusstsein sein).
                                        <br />
                                        - Ist der Rettling unfähig sich selbst festzuhalten, schiebt der oder
                                        die Retter:in die Boje vor diesen hin und greift von hinten unter seinen Armen hindurch.
                                        Die verunfallte Person wird zwischen Retter:in und Boje eingeklemmt und in Rückenlage ans
                                        Ufer transportiert.
                                    </p>
                                </div>
                                <div style={{ flex: '1 1 40%' }}>
                                    <img src={RettungsbojeAnleitung} alt="Anleitung Rettungsboje" style={{ maxWidth: '100%', height: 'auto' }} />
                                </div>
                            </div>



                        </div>
                    )}
                    {activeTab === 'Gurtretter' && (
                        <div>
                            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-start', gap: '20px' }}>
                                <div style={{ flex: '1 1 50%' }}>
                                    <h2>Gurtretter</h2>
                                    <p>Der Gurtretter wird vor allem in Seen eingesetzt. Er ist ein einfaches und vielseitig
                                        einsetzbares Rettungsgerät. Er besteht aus einem länglichen, flexiblen Auftriebskörper.
                                        An einem der Enden befindet sich ein Karabinerhaken, am anderen Ende Ringe und ein Band
                                        mit Schlaufe. Er wird bei der Rettung von Bewusstlosen, so wie bei der Rettung von noch
                                        Bewussten eingesetzt. Der Gurtretter ist ein zentrales Gerät bei der Rettung und wird
                                        auch an viele Wettkämpfen verwendet.</p>
                                    <br />
                                    <br />
                                </div>
                                <div style={{ flex: '1 1 40%' }}>
                                    <img src={Gurtretter} alt="Bild eines Gurtretters" style={{ maxWidth: '100%', height: 'auto' }} />
                                </div>
                            </div>
                            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-start', gap: '20px', marginTop: '30px' }}>
                                <div style={{ flex: '1 1 50%' }}>
                                    <h2>Verwendung</h2>
                                    <p>
                                        Der Auftriebskörper wird dem Rettling vom Ufer aus hingestreckt oder hingeworfen.
                                        Bei grösseren Distanzen kann der Gurtretter zur Unterstützung der rettenden Person
                                        mitgenommen werden: Die Schlaufe zieht man über die Schulter an und zieht, den
                                        Auftriebskörper hinter sich her. Beim Rettling angekommen reicht man entweder der
                                        Auftriebskörper dem Rettling und zieht ihn dann hinter sich her (dafür muss der
                                        Rettling aber noch bei Bewusstsein sein), oder man zieht den Auftriebskörper dem
                                        Rettling wie ein Gurt an und schleppt ihn dann bei kürzeren Distanzen mit dem
                                        Nacken-Stirn-/ Nackengriff ab. Bei längeren Distanzen kann man den Rettling auch
                                        einfach hinter sich herziehen.
                                    </p>
                                </div>
                                <div style={{ flex: '1 1 40%' }}>
                                    <img src={GurtretterAnleitung} alt="Gurtretter Anleitung" style={{ maxWidth: '100%', height: 'auto' }} />
                                    <img src={GurtretterInAction} alt="Bild eines Gurtretters in Aktion" style={{ maxWidth: '100%', height: 'auto', marginTop: '20px' }} />
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === 'Rettungswürfel' && (
                        <div>
                            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-start', gap: '20px' }}>
                                <div style={{ flex: '1 1 50%' }}>
                                    <h2>Rettungswürfel</h2>
                                    <p>
                                        Der Rettungswürfel besteht aus einem Würfel aus Schaumstoff, welcher
                                        umrundet von einem Netz aus rotem Seil ist. Der Vorteil vom Rettungswürfel
                                        ist, dass er relativ leicht zu werfen. Dieses Rettungsgerät wird häufig in
                                        Schwimmbädern und in Seen verwendet. Man kann mit dem Rettungswürfel
                                        etwa 15 Meter weit werfen. Die Schlaufe wird verwendet, um den
                                        Rettungsring aufzuhängen.
                                    </p>
                                    <br />
                                    <br />
                                </div>
                                <div style={{ flex: '1 1 40%' }}>
                                    <img src={Rettungsfwuerfel} alt="Verwendung Rettungswürfel" style={{ maxWidth: '100%', height: 'auto' }} />
                                </div>
                            </div>
                            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-start', gap: '20px', marginTop: '30px' }}>
                                <div style={{ flex: '1 1 50%' }}>
                                    <h2>Verwendung</h2>
                                    <p>
                                        Man nimmt das Netz in die Hand und schwingt den Sack 1-2 Mal hin und
                                        her. Dabei hebt man seine Hand und zielt auf den Rettling. Die Füße stellt
                                        man so, dass wenn man mit der rechten Hand wirft, ist der linke Fuß vorne.
                                        Wenn man mit Links wirft, spiegelverkehrt.
                                        Beim Abwurf lässt man den Ball los, wenn der Arm etwa in einem 45° Winkel
                                        ist. Der Ball sollte dann etwa 15 Meter weit fliegen.
                                    </p>
                                </div>
                                <div style={{ flex: '1 1 40%' }}>
                                    <img src={RettungswuerfelBild} alt="Bild Rettungswürfel" style={{ maxWidth: '100%', height: 'auto' }} />
                                </div>
                            </div>
                        </div>
                    )}


                    {activeTab === 'Rescue-Brett' && (
                        <div>
                            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-start', gap: '20px' }}>
                                <div style={{ flex: '1 1 50%' }}>
                                    <h2>Rescue-Brett</h2>
                                    <p>
                                        Das Rescue-Brett ist ähnlich wie ein Surfbrett. Es hat eine Fläche, auf der der Retter liegt und
                                        mit den Händen paddelt. Vorne hat es noch reichlich Platz für eine weitere Person. Mit dem Rescue-Brett
                                        kann eine Bewusstlose, so wie eine bewusste Person abgeschleppt werden. Das Brett wird eigentlich nur
                                        in Seen verwendet. Mit dem Brett ist man schnell unterwegs und kann jede Person einfach und schnell abschleppen.
                                    </p>
                                    <br />
                                    <br />
                                </div>
                                <div style={{ flex: '1 1 40%' }}>
                                    <img src={Rescuebrett} alt="Bild des Rescue-Bretts" style={{ maxWidth: '100%', height: 'auto' }} />
                                </div>
                            </div>
                            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-start', gap: '20px', marginTop: '30px' }}>
                                <div style={{ flex: '1 1 50%' }}>
                                    <h3>Verwendung</h3>
                                    <p>
                                        Die rettende Person legt sich bäuchlings aufs Brett. Sie verlagert ihr Gewicht so, dass der Bug (hintere Teil) des
                                        Bretts leicht aus dem Wasser ragt. Zum Antreiben werden die Arme entlang der Seite des Bretts gezogen. Sobald man
                                        bei der Person angekommen ist, lässt man sich ins Wasser fallen, so dass sich das Brett auch dreht. Dann nimmt man
                                        die Person unter den Achseln und legt sie auf das Brett. Mit seinem Körpergewicht dreht man dann das Brett, so dass
                                        die Person nun auf dem Brett liegt und schwimmt, zurück.
                                    </p>
                                </div>
                                <div style={{ flex: '1 1 40%' }}>
                                    <img src={RescuebrettAnleitung} alt="Anleitung zur Verwendung des Rescue-Bretts" style={{ maxWidth: '100%', height: 'auto' }} />
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === 'Wurfsack' && (
                        <div>
                            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-start', gap: '20px' }}>
                                <div style={{ flex: '1 1 50%' }}>
                                    <h2>Wurfsack</h2>
                                    <p>
                                        Der Wurfsack besteht aus einem Sack gefertigt aus reißfestem Stoff, einem
                                        Auftriebskörper und einem Schwimmseil. Der Vorteil des Wurfsacks gegenüber anderen
                                        Rettungsmitteln mit Seil ist, dass dieses kompakt verstaut ist und sich zudem präzise
                                        werfen lässt. Er wird vor allem im Fluss oder auch im See verwendet und kann nur bei
                                        noch bewussten Personen angewendet werden.
                                    </p>
                                    <br />
                                    <br />
                                </div>
                                <div style={{ flex: '1 1 40%' }}>
                                    <img src={Wurfsack} alt="Bild eines Wurfsacks" style={{ maxWidth: '100%', height: 'auto' }} />
                                </div>
                            </div>
                            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-start', gap: '20px', marginTop: '30px' }}>
                                <div style={{ flex: '1 1 50%' }}>
                                    <h2>Verwendung</h2>
                                    <p>
                                        Unmittelbar vor dem Einsatz wird der Wurfsack geöffnet, so dass das Seil ungehindert
                                        aus dem Beutel gleiten kann. Der oder die Retter:in hält den Wurfsack in der Wurfhand,
                                        zieht 2 bis 3 m Seil aus dem Sack und fixiert dieses dort mit der freien
                                        Hand. Im Idealfall wird der gestreckte Arm mit dem Wurfsack am Körper vorbeigeführt,
                                        weit zurückgenommen und dann mit einem kräftigen Schwung nach vorne gebracht und
                                        möglichst über den Rettling hinausgeworfen. Sobald der Rettling das Seil ergriffen hat,
                                        wird dieser ans Ufer gezogen.
                                    </p>
                                </div>
                                <div style={{ flex: '1 1 40%' }}>
                                    <img src={WurfsackAnleitung} alt="Anleitung zur Verwendung des Wurfsacks" style={{ maxWidth: '100%', height: 'auto' }} />
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === 'Rettungsring' && (
                        <div>
                            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-start', gap: '20px' }}>
                                <div style={{ flex: '1 1 50%' }}>
                                    <h2>Rettungsring</h2>
                                    <p>
                                        Der Rettungsring besteht aus hartem Schaumstoff in Form eines Rings. Dieser ist meistens
                                        Rot-Weiss gefärbt. Um den Ring herum ist noch ein Seil, welches dem Rettling hilft, sich
                                        festzuhalten. Manchmal ist auch noch ein Seil am Rettungsring befestigt, damit man ihn
                                        wieder zurückziehen kann.
                                        Der Rettungsring ist etwas älter und wird jetzt nicht mehr so häufig verwendet. Wenn er
                                        doch vorkommt, dann meistens in Schwimmbädern.
                                    </p>
                                    <br />
                                    <br />
                                </div>
                                <div style={{ flex: '1 1 40%' }}>
                                    <img src={Rettungsring} alt="Bild zweier Rettungsringe" style={{ maxWidth: '100%', height: 'auto' }} />
                                </div>
                            </div>
                            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-start', gap: '20px', marginTop: '30px' }}>
                                <div style={{ flex: '1 1 50%' }}>
                                    <h2>Verwendung</h2>
                                    <p>
                                        Man wirft den Rettungsring ähnlich wie den Rettungswürfel. Man greift den Ring, und
                                        schwingt ihn. Mit der anderen Hand zielt man auf den Rettling. Beim Abwurf lässt man
                                        den Ring los. Wenn ein Seil am Rettungsring vorhanden ist, nimmt man es in die Hand,
                                        lässt es aber nicht los.
                                    </p>
                                </div>
                                <div style={{ flex: '1 1 40%' }}>
                                    <img src={RettungsringAnleitung} alt="Anleitung zur Verwendung des Rettungsrings" style={{ maxWidth: '100%', height: 'auto' }} />
                                </div>
                            </div>
                        </div>
                    )}

                </div>
            </>
        );
    }

    return (
        <>
            <h1>Rettungsgeräte</h1>
            <Navbar />
        </>
    );
}