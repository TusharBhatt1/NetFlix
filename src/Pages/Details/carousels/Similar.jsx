import Carousel from "../../../Components/carousel/Carousel";
import useFetch from "../../../hooks/useFetch";


const Similar = ({ mediaType, id }) => {
    const { data, loading, error } = useFetch(`/${mediaType}/${id}/similar`);

    const title = mediaType === "tv" ? "Similar TV Shows" : "Similar Movies";

    return (
        <Carousel
           endpoint={mediaType}
            data={data?.results}
            loading={loading}
            title={title}
           
        />
    );
};

export default Similar;