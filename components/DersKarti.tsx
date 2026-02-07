interface DersProgramiProps {
    dersIsmi: string;
    gun: string;
    saat: number;
    derslik: string;

}

export default function DersProgrami({dersIsmi, gun, saat, derslik}: DersProgramiProps){
    return(
        <div className="container mx-auto ">
            <div className="border border-gray-300 p-4 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold">{dersIsmi}</h3>
                <p className="text-gray-600">Gün: {gun}</p>
                <p className="text-gray-600">Saat: {saat}</p>
                <p className="text-gray-600">Derslik: {derslik}</p>
            </div>

        </div>
    )
}