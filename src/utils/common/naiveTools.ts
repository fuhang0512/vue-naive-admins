import { isNullOrUndef } from "@/utils/common/is";

export function setupMessage(NMessage: any) {
  let loadingMessage: any = null;
  class Message {
    /**
     * 规则：
     * * loading message只显示一个，新的message会替换正在显示的loading message
     * * loading message不会自动清除，除非被替换成非loading message，非loading message默认2秒后自动清除
     */

    removeMessage(message = loadingMessage, duration = 2000) {
      setTimeout(() => {
        if (message) {
          message.destroy();
          message = null;
        }
      }, duration);
    }

    showMessage(type: any, content: any, option: any = {}) {
      if (loadingMessage && loadingMessage.type === "loading") {
        // 如果存在则替换正在显示的loading message
        loadingMessage.type = type;
        loadingMessage.content = content;

        if (type !== "loading") {
          // 非loading message需设置自动清除
          this.removeMessage(loadingMessage, option.duration);
        }
      } else {
        // 不存在正在显示的loading则新建一个message,如果新建的message是loading message则将message赋值存储下来
        let message = NMessage[type](content, option);
        if (type === "loading") {
          loadingMessage = message;
        }
      }
    }

    loading(content: any) {
      this.showMessage("loading", content, { duration: 0 });
    }

    success(content: any, option = {}) {
      this.showMessage("success", content, option);
    }

    error(content: any, option = {}) {
      this.showMessage("error", content, option);
    }

    info(content: any, option = {}) {
      this.showMessage("info", content, option);
    }

    warning(content: any, option = {}) {
      this.showMessage("warning", content, option);
    }
  }

  return new Message();
}

export function setupDialog(NDialog: any) {
  NDialog.confirm = function (option: any = {}) {
    const showIcon = !isNullOrUndef(option.title);
    return NDialog[option.type || "warning"]({
      showIcon,
      positiveText: "确定",
      negativeText: "取消",
      onPositiveClick: option.confirm,
      onNegativeClick: option.cancel,
      onMaskClick: option.cancel,
      ...option,
    });
  };

  return NDialog;
}
