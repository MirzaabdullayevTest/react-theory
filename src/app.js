import { Component } from 'react'
import Car from './car'
import classes from './style.module.css'

class App extends Component {
    changeTitleHandler = (e) => {
        this.setState({
            title: 'Changed!'
        })
    }

    toggleCarsHandler = (e) => {
        this.setState({
            showCars: !this.state.showCars
        })
    }

    inputChangeHandler = (e) => {
        this.setState({
            title: e.target.value,
            val: e.target.value,
        })
    }

    changeTitleCarsHandler = (name) => {
        this.setState({
            title: name
        })
    }

    carTitleHandler = (value, idx) => {
        let cars = [...this.state.cars]
        cars[idx].name = value

        this.setState({
            cars
        })
    }

    // componentDidMount
    componentDidMount() {
        console.log('componentDidMount');
    }

    render() {
        console.log('render');
        // console.log(classes);
        const cls = []

        if (this.state.val.length <= 4) {
            cls.push(classes.error)
        } else {
            cls.push(classes.success)
        }

        const appStyle = {
            textAlign: 'center',
        }

        let div = null

        if (this.state.showCars) {
            div = this.state.cars.map((car, index) => {
                return (
                    <Car
                        key={index}
                        idx={index}
                        name={car.name}
                        year={car.year}
                        onCarClick={this.carTitleHandler}
                        onChange={
                            () => { this.changeTitleCarsHandler(car.name) }
                        }
                    />
                )
            })
        }

        return (
            <div className="App" style={appStyle} >
                <h1>
                    {this.state.title}
                </h1>
                <input type="text"
                    onChange={this.inputChangeHandler}
                    className={cls.join(' ')} />
                <br />
                <button onClick={this.toggleCarsHandler}>Click</button>
                <br />
                {div}
            </div>
        )
    }

    constructor(props) {
        super(props)
        console.log('constructor');
        this.state = {  // object
            cars: [
                {
                    name: "Mazda 4",
                    year: 2020
                },
                {
                    name: "Ford",
                    year: 2015
                },
                {
                    name: "Ferari",
                    year: 2022
                },
            ],
            title: this.props.title,
            showCars: false,
            val: ''
        }
    }
}

export default App