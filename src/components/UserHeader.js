import React from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../actions/index';

class UserHeader extends React.Component {
  componentDidMount() {
    this.props.fetchUser(this.props.userId);
  }
  render() {
    const { user } = this.props;

    if (!user) {
      console.log('no user found');
      return null;
    }
    return <div className="header">{user.name}</div>;
  }
}

const mapStateToProps = (state, ownProps) => {
  // Extract computation of state in mapStateToProps
  return { user: state.users.find(user => user.id === ownProps.userId) };
};

export default connect(mapStateToProps, { fetchUser })(UserHeader);
