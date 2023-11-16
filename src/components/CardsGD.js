import './Cards.css';
import CardItem from './CardItem';

//NOTE TO SELF: SINCE CHOP AND ISLAND ESCAPADES IS UNFINISHED COMMENTED THEM OUT

function CardsGD() {
    return (
        <div className='cards'>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>

                        <CardItem
                            src='images/gggcropped.mp4'
                            text='Served as a programmer, writer, and artist for the 2023 UPGRADE Halloween 24HR Game Jam.
                            Awarded “Best Production Value - Art & Sound” for rhythm game created in a team of 3.

                            '
                            skills={['Unity', 'C#', 'Procreate']}
                            label='Gaslight Gatekeep Girlboss'
                            path='/ggg'
                        />

                        {/*<CardItem*/}
                        {/*    src='images/chop3.mp4'*/}
                        {/*    text='Developing an educational Unity C# game to improve Informed Assent for children with Down syndrome in medical studies.*/}
                        {/*    Click to see design doc!'*/}
                        {/*    skills={['Unity', 'C#', 'Procreate']}*/}
                        {/*    label='CHOP'*/}
                        {/*    path='/CHOP'*/}
                        {/*/>*/}

                        <CardItem
                            src='images/Alice2.mp4'
                            text='A Java game utilizing Swing, file i/o, JPanel/JFrame, and 2D arrays.
                            Submitted as my CIS 1200 final project.
                            Click here to visit the repo!
                            '
                            skills={['Java']}
                            label='Alice in Dungeonland'
                            path='https://github.com/christinaqiu3/AliceJava'
                        />

                    </ul>
                    <ul className='cards__items'>



                        <CardItem
                            src='images/vamp3tryFINAL.mp4'
                            text='Designed game UI and a monster with a timing based minigame coded in Unity.
                            Click to see more!'
                            skills={['Unity', 'Procreate']}
                            label='Galaxy Gacha'
                            path='/galaxygacha'
                        />

                        <CardItem
                            src='images/MMM4.mp4'
                            text='Designed and developed visual novel in 24 hours with 2 team members for the 2022 UPGRADE
                            Halloween Game Jam. Won “Best Production Value – Art & Sound” and “Best Use of Trick Theme” Awards.'
                            skills={['Unity', 'Procreate']}
                            label='Mansplain Manipulate Manslaughter'
                            path='https://ooorz.itch.io/mansplain-manipulate-manslaughter'
                        />

                    </ul>
                    <ul className='cards__items'>



                        {/*<CardItem*/}
                        {/*    src='images/FF4.mp4'*/}
                        {/*    text='The UPGRADE minigame collection for which I and 2 team members made an endless runner game.*/}
                        {/*    Click for more!'*/}
                        {/*    skills={['Unity', 'Procreate']}*/}
                        {/*    label='Island Escapades'*/}
                        {/*    path='/islandescapades'*/}
                        {/*/>*/}

                    </ul>
                </div>
            </div>
        </div>
    );
}

export default CardsGD;