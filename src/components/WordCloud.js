import React from 'react'
import { Image, Reveal, Grid, Segment } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import img1 from '../1&2.jpg'
import img2 from '../3(1).jpg'
import img3 from '../3(2).jpg'
import img4 from '../4.jpg'
import img5 from '../5.jpg'
import imgw1 from '../w1&2.jpg'
import imgw2 from '../w3(1).png'
import imgw3 from '../w3(2).png'
import imgw4 from '../w4.png'
import imgw5 from '../w5.png'

const RevealExampleFade = () => (
    <div>
        <h1>Please move your mouse to see the word cloud for different seasons of Jojo</h1>
        <Segment placeholder>
            <Grid columns={3} relaxed='very' stackable>
                <Grid.Column>
                    <Reveal animated='fade'>
                        <Reveal.Content visible>
                            <Image src={img1}  />
                            <h2>Jojo 1&2</h2>
                        </Reveal.Content>
                        <Reveal.Content hidden>
                            <Image src={imgw1} />
                        </Reveal.Content>
                    </Reveal>
                    <h2>Jojo 1&2</h2>
                </Grid.Column>
                <Grid.Column>
                    <Reveal animated='fade'>
                        <Reveal.Content visible>
                            <Image src={img2} />
                            <h2>Jojo 3(1)</h2>
                        </Reveal.Content>
                        <Reveal.Content hidden>
                            <Image src={imgw2} />
                        </Reveal.Content>
                        <h2>Jojo 3(1)</h2>
                    </Reveal>
                </Grid.Column>
                <Grid.Column>
                    <Reveal animated='fade'>
                        <Reveal.Content visible>
                            <Image src={img3} />
                            <h2>Jojo 3(2)</h2>
                        </Reveal.Content>
                        <Reveal.Content hidden>
                            <Image src={imgw3} />
                        </Reveal.Content>
                        <h2>Jojo 3(2)</h2>
                    </Reveal>
                </Grid.Column>
            </Grid>
        </Segment>
        <br/>
        <br/>
        <Segment placeholder>
            <Grid columns={3} relaxed='very' stackable>
            <Grid.Column>
                    <Reveal animated='fade'>
                        <Reveal.Content visible>
                            <Image src={img4} />
                            <h2>Jojo 4</h2>
                        </Reveal.Content>
                        <Reveal.Content hidden>
                            <Image src={imgw4} />
                        </Reveal.Content>
                        <h2>Jojo 4</h2>
                    </Reveal>
                </Grid.Column>
                <Grid.Column>
                    <Reveal animated='fade'>
                        <Reveal.Content visible>
                            <Image src={img5} />
                            <h2>Jojo 5</h2>
                        </Reveal.Content>
                        <Reveal.Content hidden>
                            <Image src={imgw5} />
                        </Reveal.Content>
                        <h2>Jojo 5</h2>
                    </Reveal>
                </Grid.Column>
            </Grid>
        </Segment>
    </div>
)

export default RevealExampleFade