import React from 'react';
import Form from "../form/Form";
import './FirstScreen.css'

const FirstScreen = () => {
    return (
            <section className='first-screen'>
                <div className="container">
                    <h2 className='first-screen__title'>Заголовок II секции</h2>
                    <p className='first-screen__descr'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur deserunt,
                        distinctio pariatur perferendis quis repudiandae sit voluptatem voluptates? A adipisci animi atque autem
                        consequatur cum, cumque dolorem doloremque doloribus error fugit necessitatibus pariatur praesentium quibusdam
                        repellat repellendus sit unde veritatis voluptate voluptates? Amet consectetur dolore laudantium officia omnis
                        pariatur reprehenderit saepe. Ab accusamus accusantium aspernatur aut dicta dolorem doloremque eius ipsum modi,
                        molestiae neque nostrum, provident quos ratione reiciendis repellendus sapiente soluta suscipit tempora tenetur
                        unde veniam voluptate voluptatibus? Adipisci aut earum est exercitationem hic nesciunt nihil nulla obcaecati
                        omnis pariatur placeat quos, rem reprehenderit suscipit vel. Magni, quia, saepe.</p>
                    <Form/>
                </div>
            </section>
    );
};

export default FirstScreen;