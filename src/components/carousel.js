import React, { Component } from 'react';
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption
} from 'reactstrap';
import TravelLogo from "../assets/images/travel.jpg"
import TradeLogo from "../assets/images/trade.jpg"
import Money from "../assets/images/money.jpg"
import "../components/css/login.css"


const items = [
    {
    src: TravelLogo,
    altText: 'Slide 1',
    caption: 'Slide bjwehrbfbewhfbrjewbfrewfrewfrewfrew irhue wfre wifriewhfriewhfrhewhriewfhr ioqiewhqi hefihwqfruewiurheiwguiiuefr eiur fiehrwihfriuehwiuhfriuewhiuh riehwiufhieruwhfiurieuwh fireh wifhriuewhirhiqhurihefiurheiw hfirqhuirhaihfiruiuqhiruh iu  rewhiuh o hri fiurhieh ifhreiwhfuihreuwihfr wefriewf ruiewfriuewhfir eiuwf r9ue fiaiueqwouehiwq q fhfuiewqhfi riuqhifuwqiufehiqf iwqe iqiewq if eiqf ewiqf iewq fiuweqfiwqfi fruiqhf riuehwfhriewhguirewiuhgre grewui giure wg'
  },
    {
    src: TradeLogo,
    altText: 'Slide 2',
    caption: 'Slide 2'
  },
    {
    src: Money,
    altText: 'Slide 3',
    caption: 'Slide 3'
  }
];

class Carousel1 extends Component {
    constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
    }

    onExiting() {
    this.animating = true;
    }

    onExited() {
    this.animating = false;
    }

    next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
    }

    previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
    }

    goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
    }

    render() {
        const { activeIndex } = this.state;

        const slides = items.map((item) => {
            return (
            
                    <CarouselItem
                        onExiting={this.onExiting}
                        onExited={this.onExited}
                        key={item.src}
                        className="h-100"
                    >
                        <img src={item.src} className="carouselwidth"/>
                        <CarouselCaption className="mt-auto" captionText={item.caption}/>
                    </CarouselItem>

                
            );
        });

        return (
            <Carousel
            activeIndex={activeIndex}
            next={this.next}
            previous={this.previous}
            className="h-100"
            >
            <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
            {slides}
            {/* <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
            <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} /> */}
            </Carousel>
        );
    }
}


export default Carousel1;