// TODO move to shared folder
import config from '../config/main';

export const errorCodes = {
  user : {
      userNotFound: {
        code: 'user not found',
        text: 'User was not found.',
      },
      retryAfter: {
        code: 'retry after',
        text: 'You can only resend the activation every ' + config.timeTilNextActivationResendMin + ' minutes. You can resend again in ',
      },
      userAlreadyActive: {
        code: 'user already active',
        text: 'User is already activated.'
      }
  },
  mail: {
    duplicate: {
      code: 'duplicate mail',
      text: 'That email address is already in use'
    },
    noTeacher: {
      code: 'no teacher',
      text: 'You are not allowed to register as teacher',
    },
    notSend: {
      code: 'email not send',
      text: 'Could not send E-Mail'
    }
  },
  duplicateUid: {
    code: 'duplicate uid',
    text: 'That matriculation number is already in use'
  },
  course: {
    duplicateName: {
      code: 'duplicate course name',
      text: 'Course name already in use.'
    },
    notOnWhitelist: {
      code: 'notOnWhiteList',
      text: 'Not allowed to join, you are not on whitelist.'
    },
    accessKey: {
      code: 'incorrectAccessKey',
      text: 'Incorrect or missing access key'
    }
  },
  whitelist: {
    duplicateWhitelistUser: {
      code: 'duplicate uid',
      text: 'That matriculation number is already in use for this course.'
    }
  },
  password: {
    regex: {
      code: '',
      text: 'Password must have at least 8 characters which contain one special character or digit',
      regex: '^(?=.*[a-zA-Z])(?=.*[$%&§=#!?*()|0-9]).{8,}$'
    }
  },
  upload: {
    type: {
      notCSV: {
        code: 'wrongTypeCSV',
        text: 'Wrong type allowed are just csv files.'
      }
    }
  },
  save: {
    couldNotSaveImprint: {
      code: 'coldNotSaveImprint',
      text: 'Could not save Imprint'
    }
  },
  query: {
    empty: {
      code: 'emptyQuery',
      text: 'Query was empty.'
    }
  }
};
