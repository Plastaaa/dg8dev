
function rees(){
    const script = document.createElement("script");
    script.src = "https://staging.boxauto.bnpparibas-pf.com/o/BoxAutoNG-Theme/js/export/staging/ajax.js";
    script.async = false;
    document.head.appendChild(script)
    const script2 = document.createElement("script");
    script2.src = "https://staging.boxauto.bnpparibas-pf.com/o/BoxAutoNG-Theme/js/export/rx.min.js";
    script2.async = false;
    document.head.appendChild(script2)
}


export default function Home(){
    return (
        <div>
            <script type="text/javascript" src="//code.jquery.com/jquery-1.11.0.min.js"></script>
            <script type="text/javascript" src="//code.jquery.com/jquery-migrate-1.2.1.min.js"></script>
            <link rel="stylesheet" href="https://unpkg.com/leaflet@1.0.1/dist/leaflet.css" />
            <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
            {
                rees()
            }
        </div>
    )
}