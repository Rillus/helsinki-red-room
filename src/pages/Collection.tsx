import collection from "../data/collection";

const Collection = ({id}: {id: any}) => {
  const collectionDetails = collection.details[id-1];

  return <div>
    <h1>The Collection</h1>
    <h2>{id}: {collectionDetails.name}</h2>
    <iframe
      className="Iframe"
      src={collectionDetails.iframe}
      width="100%"
      height="100%"
      frameBorder="0"
      title={collectionDetails.name}>
    </iframe>
  </div>;
};

export default Collection;
