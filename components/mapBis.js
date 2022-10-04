import Head from 'next/head';

import dynamic from 'next/dynamic';

const MapWithNoSSR = dynamic(() => import('./Map'), {
  ssr: false,
});


export default function Home(props) {
  return (
    <div>
      <MapWithNoSSR concess={props.concess}/>
    </div>
  );
}
