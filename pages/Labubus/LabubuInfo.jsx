import { useOutletContext } from "react-router-dom"

export default function LabubuInfo() {
    const { currentLabubu } = useOutletContext()
    
    return (
        <section className="labubu-detail-info">
            <h4>Navn: <span>{currentLabubu.name}</span></h4>
            <h4>Beskrivelse: <span>{currentLabubu.description}</span></h4>
            <h4>Fargepalett: <span>{currentLabubu.pallet}</span></h4>
        </section>
    )
}