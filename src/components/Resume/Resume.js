import Footer from '../Footer/Footer.js'
import './Resume.scss'
import { Text } from '@chakra-ui/layout'
import "@fontsource/montserrat"

const Resume = () => {
    return (
        <div className='container'>
            <div className="text">
            <Text fontSize={'5xl'} fontWeight='bold' fontFamily={'oswald'}>WORK EXPERIENCE</Text>
            <Text fontSize={'3xl'} fontWeight='bold' fontFamily={'montserrat'}>Home Depot</Text>
            <Text fontSize={'2xl'} fontStyle='italic' fontFamily={'montserrat'}>Instructional Aide</Text>
            <Text fontSize={'1xl'} fontFamily={'montserrat'}>
                <ul className='list'>
                    <li>• Piscataway Regional Day School is a school specially equipped for special needs children</li>
                    <li>• As Instructional Aide, I assisted with the education of these children with subjects ranging from mathematics to English.</li>
                    <li>• I also assisted them with their meals as some of them do not have the motor functions to eat without assistance.</li>
                    <li>• In more extreme cases, I would aid them with their hygiene if they are not capable of doing it themselves.</li>
                </ul>
            </Text>
            <Text fontSize={'3xl'} fontWeight='bold' fontFamily={'montserrat'}>The House of Poke</Text>
            <Text fontSize={'2xl'} fontStyle='italic' fontFamily={'montserrat'}>Power Packer/Order Picker/Lot Associate</Text>
            <Text fontSize={'1xl'} fontFamily={'montserrat'}>
                <ul className='list'>
                    <li>• Stocking shelves with items ranging from small merchandise to big products such as barbecue grills.</li>
                    <li>• Picking orders from throughout the store for it to be able to be picked up for online pick-up.</li>
                    <li>• Arranging the carts in the parking lot, and aiding people who need assistance with heavy lifting.</li>
                    <li>• Helped customers around the store with simple and technical questions.</li>
                </ul>
            </Text>
            <Text fontSize={'3xl'} fontWeight='bold' fontFamily={'montserrat'}>Piscataway Regional Day School</Text>
            <Text fontSize={'2xl'} fontStyle='italic' fontFamily={'montserrat'}>Kitchen Worker</Text>
            <Text fontSize={'1xl'} fontFamily={'montserrat'}>
                <ul className='list'>
                    <li>• Washed and arranged dirty dishes.</li>
                    <li>• Cleaned the restaurant and kitchen.</li>
                    <li>• Prepared ingredients and prepared food to be taken out to the customers.</li>
                </ul>
            </Text>

            <div className='break' />

            <Text fontSize={'5xl'} fontWeight='bold' fontFamily={'oswald'}>EDUCATION</Text>
            <Text fontSize={'3xl'} fontWeight='bold' fontFamily={'montserrat'}>Rutgers University</Text>
            <Text fontSize={'2xl'} fontStyle='italic' fontFamily={'montserrat'}>B.S. Computer Engineering</Text>
            <Text fontSize={'1xl'} fontFamily={'montserrat'}>
                <ul className='list'>
                    <li>• Minor in Computer Science</li>
                    <li>• GPA: 3.72</li>
                    <li>• Relevant coursework: Engineering Mechanics: Statics, Principals of Electrical Engineering, Digital
                        Logic Design, Probability & Random Processes, Introduction to Computer Science, Discrete
                        Mathematics</li>

                </ul>
            </Text>

            <div className='break' />

            <Text fontSize={'5xl'} fontWeight='bold' fontFamily={'oswald'}>SKILLS & OBJECTIVES</Text>
            <Text fontSize={'1xl'} fontFamily={'montserrat'}>
                <ul className='list'>
                    <li>• Skills: Proficiency in MATLAB and Java, experience with Microsoft Word and PowerPoint, knowledge
                        with Adobe applications such as Photoshop and After Effects, adept problem-solving skills, excellent
                        organizational skills, and great teamwork, communicating, and leadership skills</li>
                    <li>• Objectives: To gain experience in anything concerning computers whether its software-sided or
                        hardware-sided</li>

                </ul>
            </Text>

            <div className='break' />

            </div>
            <Footer />
        </div>
    )
}

export default Resume
