import { Component } from 'react'
import classes from './style.module.css'

class Car extends Component {
    componentDidUpdate() {
        console.log('Car componentDidUpdate');
    }

    shouldComponentUpdate(prev, next) {
        console.log('shouldComponentUpdate');
        // console.log(prev);
        return this.props.name.trim() !== prev.name.trim()
    }

    static getDerivedStateFromProps(props, state) {
        console.log('getDerivedStateFromProps');
        return null
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('getSnapshotBeforeUpdate');
        return null;
    }

    componentWillUnmount() {
        console.log('componentWillUnmount');
        // alert('Car componentlar o`chirildi');
    }

    render() {
        console.log('Car render');
        const carStyle = {
            boxShadow: '0 0 5px #ccc',
            display: 'inline-block',
            padding: '15px',
            margin: '5px',
            textAlign: 'center'
        }

        const cls = [classes.input]

        console.log(this.state);

        if (this.props.name.length <= 4) {
            cls.push(classes.error)
        } else {
            cls.push(classes.success)
        }

        return (
            <div className="Car" style={carStyle}>
                <h1>{this.props.name}</h1>
                <p>{this.props.year}</p>
                <span>id <strong>{Math.floor(Math.random() * 100)}</strong></span>
                <br />
                <input type="text"
                    onChange={(e) => {
                        this.props.onCarClick(e.target.value, this.props.idx)
                    }}
                    value={this.props.name}
                    className={cls.join(' ')}
                />
                <br />
                <button onClick={this.props.onChange}>Change title</button>
            </div >
        )
    }
}

export default Car
