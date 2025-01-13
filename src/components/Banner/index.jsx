import styled from "styled-components";


const BannerVideo = styled.div`
    margin: 0;
    background-color: transparent;
    width: 100%;
    height: 60vh;
`;

const Video = styled.video`
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
`;



const Banner = () => {
    return (
        <BannerVideo className="banner">
            <Video autoPlay muted loop>
                <source src="https://cdn-resources.ableton.com/resources/videos/live/l12_tour_header_desktop.mp4" aria-labelledby="live-12-hero-video-desktop_caption" type="video/mp4" />
            </Video>


        </BannerVideo>
    )
}

export default Banner;