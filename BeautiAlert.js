    class BeautiAlert {
        constructor(classOrId) {
            this.classOrId = classOrId;
            if (classOrId == undefined || classOrId == null || classOrId == '') {
                throw new Error("id or classname is not defined... !");
            }
            this.checkClassOrId();
        }
        checkClassOrId() {
            if (document.getElementById(this.classOrId) != undefined ||
                document.getElementById(this.classOrId) != null) {
                this.checkId = document.getElementById(this.classOrId);
                return this.checkId;
            } else if (document.getElementsByClassName(this.classOrId) != undefined ||
                document.getElementsByClassName(this.classOrId) != null) {
                this.checkClassName = document.getElementsByClassName(this.classOrId);
                return this.checkClassName;
            } else {
                throw new Error(classOrId + "is not defined !!");
            }
        }
        Init(message, messageType) {
            this.element = this.checkClassOrId();
            var createDiv = document.createElement('div');
            var icon = document.createElement('div');
            createDiv.className = "alert";
            var button = document.createElement('button');
            button.style.marginLeft = "99%";
            button.style.marginTop = "-1%";
            button.style.borderStyle = "inherit";
            button.style.cursor = "pointer";
            button.className = "fa fa-times-circle";
            switch (messageType) {
                case "success":
                    createDiv.style.backgroundColor = "#27ae60";
                    createDiv.style.borderColor = "#27ae60";
                    icon.className = "fa fa-check-circle";
                    button.style.background = "#27ae60";
                    button.style.borderColor = "#27ae60";
                    icon.style.color = "white";
                    break;
                case "warning":
                    createDiv.style.backgroundColor = "#e67e22";
                    createDiv.style.borderColor = "#e67e22";
                    button.style.background = "#e67e22";
                    button.style.borderColor = "#e67e22";
                    icon.className = "fa fa-exclamation-triangle";
                    icon.style.color = "white";
                    break;
                case "error":
                    createDiv.style.backgroundColor = "#e74c3c";
                    createDiv.style.borderColor = "#e74c3c";
                    button.style.background = "#e74c3c";
                    button.style.borderColor = "#e74c3c";
                    icon.className = "fa fa-exclamation-triangle";
                    icon.style.color = "white";
                    break;
                case "information":
                    createDiv.style.backgroundColor = "#2980b9";
                    createDiv.style.borderColor = "#2980b9";
                    button.style.background = "#2980b9";
                    button.style.borderColor = "#2980b9";
                    icon.className = "fa fa-question-circle";
                    icon.style.color = "white";
                    break;
            }
            createDiv.animate([
                // keyframes
                {
                    transform: 'translateY(-300px)'
                },
                {
                    transform: 'translateY(0px)'
                }
            ], {
                // timing options
                duration: 600,
            });
            this.element.appendChild(createDiv);
            createDiv.appendChild(button);
            icon.innerHTML = "   " + message;
            createDiv.appendChild(icon);
            icon.appendChild(messageEl);
        }
    }