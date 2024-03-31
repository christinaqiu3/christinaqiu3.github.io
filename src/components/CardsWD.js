
import './Cards.css';
import CardItem from './CardItem';

function CardsWD() {
    return (
        <div className='cards'>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>

                        <CardItem
                            src='images/fh.mp4'
                            text='Designed and developed an application for large and geographically distant families
                            that serves as a hub for planning events, sharing memories, and staying connected.'
                            skills={['React','NextJS','Figma']}
                            label='FamilyHub'
                            path='https://wenxich.medium.com/familyhub-stay-close-even-miles-apart-ae5b19947382'
                        />
                        <CardItem
                            src='images/dinin.mp4'
                            text='Implemented interactive graphs for the Dining Analytics tab.
                            Seamlessly integrated University provided APIs of past user behavior to create
                            predictive models for dining dollar and meal swipe spending.'
                            skills={["Swift"]}
                            label='Penn Mobile iOS App'
                            path='https://apps.apple.com/us/app/penn-mobile/id944829399'
                        />
                    </ul>
                    {/*<ul className='cards__items'>*/}

                    {/*    <CardItem*/}
                    {/*        src='images/pennapps-vid.mp4'*/}
                    {/*        text='Worked on the PennApps creative team to design*/}
                    {/*        the 2023 PennApps hackathon website on Figma. Click to visit the site!'*/}
                    {/*        skills={['Figma']}*/}
                    {/*        label='PennApps 2023 Website'*/}
                    {/*        path='https://2023f.pennapps.com/'*/}
                    {/*    />*/}
                    {/*    <CardItem*/}
                    {/*        src='images/fv5.mp4'*/}
                    {/*        text='Created this website from scratch using Figma and ReactJS. Click here to take a look at my design process!'*/}
                    {/*        skills={["Javascipt", 'React', "CSS", 'Figma']}*/}
                    {/*        label='My Personal Website'*/}
                    {/*        path='/personalwebsite'*/}
                    {/*    />*/}
                    {/*</ul>*/}
                </div>
            </div>
        </div>
    );
}

export default CardsWD;