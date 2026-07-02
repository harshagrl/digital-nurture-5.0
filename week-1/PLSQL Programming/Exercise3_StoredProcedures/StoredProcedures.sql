-- =====================================================
-- Exercise 3: Stored Procedures
-- =====================================================

--------------------------------------------------------
-- Scenario 1:
-- Process Monthly Interest for Savings Accounts
--------------------------------------------------------

CREATE OR REPLACE PROCEDURE ProcessMonthlyInterest
AS
BEGIN

    UPDATE Accounts
    SET Balance = Balance + (Balance * 0.01)
    WHERE AccountType = 'Savings';

    COMMIT;

END;
/

--------------------------------------------------------
-- Scenario 2:
-- Update Employee Bonus
--------------------------------------------------------

CREATE OR REPLACE PROCEDURE UpdateEmployeeBonus(
    p_Department IN VARCHAR2,
    p_BonusPercentage IN NUMBER
)
AS
BEGIN

    UPDATE Employees
    SET Salary = Salary + (Salary * p_BonusPercentage / 100)
    WHERE Department = p_Department;

    COMMIT;

END;
/

--------------------------------------------------------
-- Scenario 3:
-- Transfer Funds Between Accounts
--------------------------------------------------------

CREATE OR REPLACE PROCEDURE TransferFunds(
    p_FromAccount IN NUMBER,
    p_ToAccount IN NUMBER,
    p_Amount IN NUMBER
)
AS

    v_Balance NUMBER;

BEGIN

    -- Get balance of source account
    SELECT Balance
    INTO v_Balance
    FROM Accounts
    WHERE AccountID = p_FromAccount;

    -- Check sufficient balance
    IF v_Balance >= p_Amount THEN

        -- Deduct amount
        UPDATE Accounts
        SET Balance = Balance - p_Amount
        WHERE AccountID = p_FromAccount;

        -- Add amount
        UPDATE Accounts
        SET Balance = Balance + p_Amount
        WHERE AccountID = p_ToAccount;

        COMMIT;

        DBMS_OUTPUT.PUT_LINE('Funds transferred successfully.');

    ELSE

        DBMS_OUTPUT.PUT_LINE('Insufficient balance.');

    END IF;

END;
/