import { messenger } from "@services/core/messanger";

/**
 * Listen to messages from background script.
 */
messenger.addListener(request => {
  switch (request.type) {

  }
});
