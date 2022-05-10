// import { Button, Card, CardGroup, Row } from 'react-bootstrap';
import Service from './Service';
import './Services-css.css';
const Services = () => {
    const allServices = [
        {
            id: '1',
            image: 'https://i.ibb.co/Hxm0vZL/athletic-man-woman-with-dumbbells.jpg',
            name: 'SMALL GROUP TRAINING',
            description: 'Our Small Group Personal Training is unlike anything you will have experienced before.In micro training groups of just 6: 1, all your workouts are customized, recorded and coached by an experienced personal trainer.The balance of the motivational group environment and 1-2 - 1 attention makes it the perfect mix to produce fast results, without the bounce back.',
            price: 100
        },
        {
            id: '2',
            image: 'https://i.ibb.co/qFZjJx7/young-fitness-man-studio.jpg',
            name: '1-2-1 PERSONAL TRAINING',
            description: '1-2-1 personal training is the ultimate investment in your health. You will be working directly with your coach in our private studio, following a bespoke plan to ensure you hit your goals in record time.Whether you want to slim down, add muscle or anything in between, our personal training packages will get you there in a fun and sustainable way.',
            price: 200
        },
        {
            id: '3',
            image: 'https://i.ibb.co/q5zgshW/food-and-nutrition-e1536408763433.jpg',
            name: 'NUTRITION COACHING',
            description: 'We will teach you how to take control of your health and weight, without relying on any specific diet or products, with our 1-2 - 1 nutrition coaching. You will working alongside a qualified nutritionist to build a sustainable approach together, so you will not only hit your physique goals, but be able to stay there without rigid diets or unrealistic restrictions.',
            price: 300
        },
        {
            id: '4',
            image: 'https://i.ibb.co/ZY6kSLV/istockphoto-1176295972-612x612.jpg',
            name: 'ONLINE TRAINING',
            description: 'The Armoury Online Coaching Packages have been created to take the guesswork out of getting in the best shape of your life.You will be working 1-2-1 with your Personal Trainer through our Armoury Coaching app- where you will get workouts designed specifically for you, progress monitored, regular check- ins and nutrition support for unrivalled results, anywhere in the world.',
            price: 400
        }
    ]
    return (
        <div id='services'>
            <h2 className='my-5'>My Services</h2>
            <div className='d-flex'>
                {
                    allServices.map(service => <Service key={service.id} service={service}></Service>)
                }
            </div>

        </div>
    );
};

export default Services;