import {useKeenSlider} from "keen-slider/react";
import {Brand, Slider, SliderWrapper} from "./style.ts";
import image1 from '../../../assets/images/img (1).png'
import image2 from '../../../assets/images/img (2).png'
import image3 from '../../../assets/images/img (3).png'
import image4 from '../../../assets/images/img (4).png'
import image5 from '../../../assets/images/img (5).png'
import image6 from '../../../assets/images/img (6).png'

export function Partners(){
    const animation = { duration: 20000 }

    const [sliderRef] = useKeenSlider(
        {
            slides: {
                perView: 3,
            },
            slideChanged() {
                console.log('slide changed')
            },
            loop: true,
            renderMode: "performance",
            drag: true,
            created(s) {
                s.moveToIdx(5, true, animation)
            },
            updated(s) {
                s.moveToIdx(s.track.details.abs + 5, true, animation)
            },
            animationEnded(s) {
                s.moveToIdx(s.track.details.abs + 5, true, animation)
            },
        },
    )


    return (
        <SliderWrapper id={'partners'}>
            <div>
                <h1>Principais clientes</h1>
                <Slider ref={sliderRef} className="keen-slider">
                    <Brand className="keen-slider__slide">
                        <img src={image1} alt=""/>
                    </Brand>
                    <Brand className="keen-slider__slide">
                        <img src={image2} alt=""/>
                    </Brand>
                    <Brand className="keen-slider__slide">
                        <img src={image3} alt=""/>
                    </Brand>
                    <Brand className="keen-slider__slide">
                        <img src={image4} alt=""/>
                    </Brand>
                    <Brand className="keen-slider__slide">
                        <img src={image5} alt=""/>
                    </Brand>
                    <Brand className="keen-slider__slide">
                        <img src={image6} alt=""/>
                    </Brand>

                </Slider>
            </div>
        </SliderWrapper>

    )
}

