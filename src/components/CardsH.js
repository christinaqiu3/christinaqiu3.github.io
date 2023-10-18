
import './Cards.css';
import CardItem from './CardItem';

function CardsH() {
    return (
        <div className='cards'>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>

                        <CardItem
                            src='images/chop3.mp4'
                            text='Working in a team of 5 to develop a game for children with Down syndrome intended
                            to help their understanding of what a sleep study entails for a better informed assent.'
                            label='CHOP Sleep Study Serious Game'
                            path='/CHOP'
                        />
                        <CardItem
                            src='images/'
                            text='Working on a 2D RPG Unity game personal project inspired by Alice in Wonderland.
                            Writing the script, creating assets, and coding.'
                            label='Alice: A Tale of Choices'
                            path='/Alice'
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default CardsH;