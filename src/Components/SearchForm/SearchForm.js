import React, { Component } from 'react';

import styles from './SearchForm.module.css';

class SearchForm extends Component {
    state = {
        value: ''
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.state.value);
        this.setState({value: ''});
    };

    handleChange = (e) => {
        this.setState({
            value: e.target.value,
        });
    };

    render() {
        return (
            <>
                <form
                className={styles.searchForm} 
                onSubmit={this.handleSubmit} >
                    <input
                    className={styles.mainInput}
                    placeholder='please enter track name...'
                    type='text'
                    value={this.state.value}
                    onChange={this.handleChange} />
                    <button 
                    className={styles.mainButton}
                    type='submit' >
                        Search
                    </button>
                </form>
            </>
        );
    }
}

export default SearchForm;