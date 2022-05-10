import React from 'react';
import { Carousel } from 'react-bootstrap';

const Banner = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/tZKFwPk/young-healthy-man-athlete-doing-exercise-with-ropes-gym-single-male-model-practicing-hard-training-h.jpg" height={700}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Fitness Guru</h3>
                        <p>Work hard to stay fit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/Ykc1kcH/beautiful-young-female-athlete-practicing-red-studio-wall.jpg" height={700}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Fitness Guru</h3>
                        <p>Maintain a balanced diet to stay fit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/qFZjJx7/young-fitness-man-studio.jpg" height={700}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Fitness Guru</h3>
                        <p>Daily workout to stay stress free.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;