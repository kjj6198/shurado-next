import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { isEmpty } from 'ramda';

import Profile from '../components/UserProfile';
import { fetchProfileRequest, editProfile } from '../stores/User/modules';

class UserProfilePage extends React.Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.fetchProfileRequest(this.props.match.params.id);
  }

  render() {
    const { user, match } = this.props;

    return (user && !user.isFetching && !isEmpty(user.profile))
      ? <Profile
          userId={match.params.id}
          profile={user.profile}
          isLoggedIn={user.isLoggedIn}
          editProfile={this.props.editProfile}
        />
      : <span>Loading...</span>
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProfileRequest: bindActionCreators(fetchProfileRequest, dispatch),
    editProfile: bindActionCreators(editProfile, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserProfilePage);
